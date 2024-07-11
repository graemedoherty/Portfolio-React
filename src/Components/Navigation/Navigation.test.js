import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation from './Navigation';

describe('Navigation Component', () => {
  it('renders buttons for each section', () => {
    render(<Navigation activeSection='About' scrollToSection={() => {}} />);

    // Assert that each button corresponding to a section is rendered
    const aboutButton = screen.getByText('About');
    const resumeButton = screen.getByText('Resume');
    const skillsButton = screen.getByText('Skills');
    const projectsButton = screen.getByText('Projects');

    expect(aboutButton).toBeInTheDocument();
    expect(resumeButton).toBeInTheDocument();
    expect(skillsButton).toBeInTheDocument();
    expect(projectsButton).toBeInTheDocument();
  });

  it('highlights the active section button', () => {
    render(<Navigation activeSection='Resume' scrollToSection={() => {}} />);

    // Get the button element for the active section
    const resumeButton = screen.getByText('Resume').closest('button');

    // Assert that the background color matches approximately
    expect(resumeButton).toHaveStyle(
      'background-color: rgba(25, 118, 210, 0.04)'
    );
  });

  it('calls scrollToSection when a button is clicked', () => {
    const scrollToSectionMock = jest.fn();
    render(
      <Navigation activeSection='About' scrollToSection={scrollToSectionMock} />
    );

    // Simulate a click on the Resume button
    const resumeButton = screen.getByText('Resume');
    resumeButton.click();

    // Assert that scrollToSectionMock was called with the correct section
    expect(scrollToSectionMock).toHaveBeenCalledWith('Resume');
  });
});
