import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactFAB from './ContactFAB';
import emailjs from 'emailjs-com';
import { cleanup } from '@testing-library/react';

jest.mock('emailjs-com', () => ({
  send: jest.fn(),
}));

describe('ContactFAB Component', () => {
  beforeEach(() => {
    emailjs.send.mockClear();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders the Fab button', () => {
    render(<ContactFAB />);
    const fabButton = screen.getByLabelText('mail');
    expect(fabButton).toBeInTheDocument();
  });

  it('opens the dialog when Fab button is clicked', async () => {
    render(<ContactFAB />);
    const fabButton = screen.getByLabelText('mail');

    await act(async () => {
      fireEvent.click(fabButton);
    });

    const dialogTitle = screen.getByText('Contact Form');
    expect(dialogTitle).toBeInTheDocument();
  });

  it('closes the dialog when clicking outside of it', async () => {
    render(<ContactFAB />);
    const fabButton = screen.getByLabelText('mail');

    await act(async () => {
      fireEvent.click(fabButton);
    });

    const dialogTitle = screen.getByText('Contact Form');
    expect(dialogTitle).toBeInTheDocument();

    // Simulate clicking outside of the dialog
    const backdrop = document.querySelector('.MuiBackdrop-root');
    await act(async () => {
      fireEvent.click(backdrop);
    });

    await waitFor(() => {
      expect(screen.queryByText('Contact Form')).not.toBeInTheDocument();
    });
  });

  it('submits the form and sends an email', async () => {
    emailjs.send.mockImplementation(() =>
      Promise.resolve({ text: 'Email sent' })
    );

    render(<ContactFAB />);
    const fabButton = screen.getByLabelText('mail');

    await act(async () => {
      fireEvent.click(fabButton);
    });

    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: 'john.doe@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Message/i), {
      target: { value: 'Hello there!' },
    });

    await act(async () => {
      fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
    });

    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalledWith(
        'service_dk4wbq3',
        'template_r5qia1k',
        {
          name: 'John Doe',
          email: 'john.doe@example.com',
          message: 'Hello there!',
        },
        '7HvNUZq2VIFM82Cvs'
      );
      expect(emailjs.send).toHaveBeenCalledTimes(1);
    });
  });

  it('displays an error message if email sending fails', async () => {
    emailjs.send.mockImplementationOnce(() =>
      Promise.reject(new Error('Failed to send email'))
    );

    render(<ContactFAB />);
    const fabButton = screen.getByLabelText('mail');

    await act(async () => {
      fireEvent.click(fabButton);
    });

    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: 'john.doe@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Message/i), {
      target: { value: 'Hello there!' },
    });

    await act(async () => {
      fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
    });

    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalledWith(
        'service_dk4wbq3',
        'template_r5qia1k',
        {
          name: 'John Doe',
          email: 'john.doe@example.com',
          message: 'Hello there!',
        },
        '7HvNUZq2VIFM82Cvs'
      );
      expect(emailjs.send).toHaveBeenCalledTimes(1);
    });
  });
});
