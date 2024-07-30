import { render, screen } from '@src/shared/providers/JestProvider/jestProvider';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
  test('Button is in the document', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Button with theme', () => {
    render(<Button variant={ButtonTheme.DANGER}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveAttribute('variant', 'danger');
  });
});
