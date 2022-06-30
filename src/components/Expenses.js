import './Expenses.css';
import ExpenseItem from './ExpenseItem';
  

function Expenses( props ){
    // const title={expenses[0].title}
    // const amount={expenses[0].amount}
    // const date={expenses[0].date}



    return (
      <div className="expenses">
        <h2> Let 's get started!</h2>
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>{" "}
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></ExpenseItem>{" "}
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        ></ExpenseItem>{" "}
      </div>
    ); 
}
 export default Expenses;