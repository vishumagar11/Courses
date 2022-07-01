import React,{Component} from "react";


class CourseList extends Component
{
    state={
        isEdit:false
    }
    
    renderCoursesList=()=>
        {
            return(
            <div className="list">
            <span>{this.props.course}</span>
            <div className="btns">
            <button >Try Quiz</button>
            <button onClick={()=>this.toggleState()}>Edit</button>
            <button onClick={()=>this.props.deleteCourse(this.props.index)}>Delete</button>
            </div>
              </div>
            )
        }

        //function render edit
        renderEdit=()=>
        {
            return(
        <form className="edit" onSubmit={this.editCourse}>
            <input type="text" defaultValue={this.props.course} ref={v => this.input = v}/>
            <button type="submit">Update</button>
        </form>
            )
        }
        toggleState=()=>{
        let isEdit=this.state.isEdit
        this.setState({
            isEdit:!isEdit
        })
    }
    editCourse=(e)=>
    {
        e.preventDefault()
        this.props.updateCourse(this.props.index,this.input.value)
        this.toggleState()
    }
    render()
    {
        
        return(
//if isEdit is true run the function renderEdit else run the function renderCoursesList

           <div>
            {this.state.isEdit ? this.renderEdit() :this.renderCoursesList()}
           </div>
        )
    }
}
export default CourseList; 