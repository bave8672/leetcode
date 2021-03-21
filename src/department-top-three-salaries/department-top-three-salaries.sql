-- Incorrect - todo: fix problem when employee salaries are lt 3 distinct values
select Department.Name as Department, TopEmployee.Name as Employee, TopEmployee.Salary as Salary
from Department
inner join (
    select DepartmentId, Name, Salary
    from Employee emp
    where Salary >= (
        select
    ) (
        select Salary
        from Employee
        where DepartmentId = emp.DepartmentId
        group by Salary
        order by Salary desc
        limit 2, 1
    )
) as TopEmployee
on Department.Id = TopEmployee.DepartmentId;
