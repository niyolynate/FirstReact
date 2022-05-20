import PropType from 'prop-types'
import Buton from './Button'

const Header = ({ title, onAdd })=> {
return (
<head>{title}</h1>
<Button color= 'green' text='Add' onClick= {onAdd} />
</header>
)
}

Header.defaultProps = {
title: 'Task Tracker',
}

Header.propTasTypes = {
title: PropTypes:strong.isRequired



<Header 
onAdd={() => setShoAddTask
(!showAdd={showAddTask}
showAdd={showAddTask}
/>
{task.length> 0 ? (
<Tasks tasks={tasks} onDelete=
{deleteTask} onTaggle=(toggleReminder}
>
):(
'No Tasks To Show'
)}
</div>
