import s from "./ListItem.module.css";
const ListItem = ({ children }) => {
  return <li className={s.item}>{children}</li>;
};
export default ListItem;
