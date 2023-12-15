import { useForm } from "../hooks";

export const TodoAdd = ({ onNewTodo }) => {

    const {desc, onInputChange, onResetForm} = useForm({
        desc: ''
    });

    const onFormSubmit = (e) => {
        e.preventDefault();
        if(desc.trim().length <= 1) return;
        const newTodo = {
            id: new Date().getTime(),
            desc,
            done: false
        };
        onNewTodo (newTodo);
        onResetForm();
    }



  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        name="desc"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        value={desc}
        onChange={onInputChange}
      />

      <button className="btn btn-outline-primary mt-1 btn-block" type="submit">
        Agregar
      </button>
    </form>
  );
};
