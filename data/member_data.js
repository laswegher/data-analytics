import single from '../public/single.png';
import double from '../public/double.png';
import triple from '../public/triple.png';

const member_data = [
  {
    id: 1,
    title: 'Single User',
    price: '$149',
    detail: ['500GB Storage', '1 User Allowed', 'Send up to 2GB'],
    image: single,
  },
  {
    id: 2,
    title: 'Partnership',
    price: '$199',
    detail: ['1TB Storage', '3 User Allowed', 'Send up to 10GB'],
    image: double,
    special: true,
  },
  {
    id: 3,
    title: 'Group Account',
    price: '$149',
    detail: ['5TB Storage', '10 User Allowed', 'Send up to 20GB'],
    image: triple,
  },
];

export default member_data;
