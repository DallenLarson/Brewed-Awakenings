import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

// what connects the arrays? employee.id === order.employeeId
// use count method to check how many times an element (employeeId) apears in array (orders)
// final product: employee.name sold # products.

document.addEventListener(
    "click", (clickEvent) => {
        const itemClicked = clickEvent.target
            if (itemClicked.id.startsWith("employee")) { 
                // "pet" specified the target
                const [, employeePrimaryKey] = itemClicked.id.split("--") 
                // deconstructing method here

                let matchingEmployee = null
                for (const employee of employees) {
                    if(parseInt(employeePrimaryKey) === employee.id) {
                        matchingEmployee = employee
                    }
                }

                let count = 0
                let matchingOrder = null
                for (const order of orders) {
                    if(matchingEmployee.id === order.employeeId) {
                        matchingOrder = order;
                        count += 1;
                    }
                }

            window.alert(`${matchingEmployee.name} sold ${count} products!`)
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}