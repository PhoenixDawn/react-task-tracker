import { useState } from "react"

const AddTask = ({onAdd, onShow}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const submit = (e) => {
        e.preventDefault();
        
        if (!text){
            alert("Please Add a task")
            return
        }

        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
        onShow()
    }

    return (
        <form className="add-form" onSubmit={submit}>
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="">Date</label>
                <input type="text" placeholder="Date" value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="">Reminder</label>
                <input checked={reminder} type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
                <input className="btn btn-block" type="submit" value="Save Task"/>
        </form>
    )
}

export default AddTask
