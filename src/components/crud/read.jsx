import "./crud-item.scss";
import * as services from "../../services/services";

export default function ReadAll() {

  const readService = async () => {
    const res = await services._read();
    console.log(res.data);
    return res.data;
  };

  const deleteService = async () => {
    const data = await readService();
    console.log(data[0]);
    const res = await services._delete(data[0].email);
    console.log(res.data);
  };

  return (
    <div className="card">
      <button type="button" className="btn btn-primary" onClick={readService}>
        GET
      </button>
      <button type="button" className="btn btn-primary" onClick={deleteService}>
        DEL
      </button>
    </div>
  );
}
