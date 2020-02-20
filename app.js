const maxUnfinshedTask = 3;
var numUnfinsihedTasks = 2;

function addTask(){
    if(numUnfinsihedTasks<maxUnfinshedTask)
    {
        numUnfinsihedTasks++;
        var taksList = document.querySelector('.to-do');
        var taskInput = document.querySelector('.todo-list-input');
        taskContent = taskInput.value;
        if(taskContent.length>0)
            taksList.innerHTML += '<li><div class="card rounded-top d-flex "><div class="card-body bg-secondary px-2 rounded"><span class = "task-content text-light">'+taskContent+'</span> <button  class="btn btn-danger float-right" onclick = deleteTask(this)><i class="fa fa-trash-o" style="font: size 24px;"></i></button></div></div></li>';
        else
        {

        }
    }
    else
    {
        $('#maxTasksModal').modal('show');
    }
}

function deleteTask(btnId)
{
    numUnfinsihedTasks--;
    btnId.parentElement.parentElement.remove();
}