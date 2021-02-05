import { render, screen } from '@testing-library/react';
import App from './App';
// import axios from 'axios';

test('renders learn react link', () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  render(<App />);
  const linkElement = screen.getByText(/Bem-vindo a busca de usuários/i);
  expect(linkElement).toBeInTheDocument();
});

// jest.mock('axios');
// describe('fetchData', () => {

//   it('fetches successfully data from an API', async () => {
//     const data = {
//       data: {
//         hits: [
//           {
//             objectID: '1',
//             title: 'a',
//           },
//           {
//             objectID: '2',
//             title: 'b',
//           },
//         ],
//       },
//     };
 
//     axios.get.mockResolvedValue(() => Promise.resolve(data));
//   });
 
//   it('fetches erroneously data from an API', async () => {
//     const errorMessage = 'Network Error';
 
//     axios.get.mockImplementationOnce(() =>
//       Promise.reject(new Error(errorMessage)),
//     );
//   });
// });