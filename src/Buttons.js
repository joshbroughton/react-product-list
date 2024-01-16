import Button from './Button';

export default function Buttons({categoriesUnique}) {
  return(categoriesUnique.map(categoryName => <Button categoryName={categoryName}></Button>));
};
