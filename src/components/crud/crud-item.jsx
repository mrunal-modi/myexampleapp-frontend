import { useState } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./crud-item.scss";
// import * as services from "../../services/services";

const CrudItem = ({ title, isDone, onDelete, onChange }) => {

  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue ] = useState(title);

  const handleChange = (name, value) => {
    onChange(name, value);
  };

  const handleEnterKey = async (e) => {
    if (e.key === 'Enter') {
      console.log('do validate');
      handleChange('todo', value);
      setIsEdit(false);
    }
  }

  return (
    <div className="crud-item card d-flex flex-row margin-bottom-20">
      <input
        type="checkbox"
        className="margin-right-10"
        checked={isDone}
        onChange={() => handleChange("isDone", !isDone)}
      />
      {
        isEdit && 
        <input 
        onChange={(e)=> { setValue(e.target.value)}} value={value}
        onKeyUp={handleEnterKey}
        type="text" 
        placeholder="Enter new item" 
        className="form-control margin-bottom-20"/>
      }
      {
        !isEdit &&
        <h5>{title}</h5>
      }
      
      <UncontrolledDropdown className="ml-auto">
        <DropdownToggle nav caret>
          <i className="fa fa-ellipsis-v"></i>
        </DropdownToggle>
        <DropdownMenu end>
          <DropdownItem onClick={() => {setIsEdit(!isEdit)}}>Edit</DropdownItem>
          <DropdownItem onClick={onDelete}>Delete</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

export default CrudItem;
