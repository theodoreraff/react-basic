import Button from "./Button";

function TodoItem({ todo, del, open }) {
    const delById = id => {
        del(id);
    };

    return (
        <div style={todoItem}>
            <p>{todo.title}</p>
            <div style={buttonItem}>
                <Button text="edit" action={() => open(todo.id, todo.title)} />
                <Button text="delete" action={() => delById(todo.id)} />
            </div>
        </div>
    );
}

export default TodoItem;

const todoItem = {
    background: "#2da4f8",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height: "auto",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0",
};

const buttonItem = {
    display: "flex",
};
