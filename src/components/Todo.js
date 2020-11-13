import React from 'react'

class todo extends React.Component{
    state = {
        onEdit: false,
        editValue: this.props.item
    };
    myRef = React.createRef();

    onRemove = () => {
        this.myRef.current.className = "active";
        this.props.handleDelete();
    };

    handleEditValue = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    };

    onEdit = () => {
        this.setState({onEdit: true})
    };

    handleCancel = () => {
        const {editValue} = this.state;
        if(editValue === ''){
            this.setState({editValue: this.props.item});
        }
        this.setState({onEdit: false})
    };

    handleSave = () => {
        const {editValue} = this.state;
        if(editValue === ''){
            this.setState({editValue: this.props.item});
        }
        else{
            this.props.handleEdit(editValue, this.props.id);
        }
        this.setState({onEdit: false})
    }

    render(){
        const {item} = this.props;
        if(this.state.onEdit){
            return (
                <li>
                    <input type="text"
                        value={this.state.editValue}
                        name="editValue" id="editValue"
                        onChange={this.handleEditValue}
                    />
                    <div className="row">
                        <i className="fa fa-save"
                        title="Save"
                        onClick={this.handleSave}
                        />
                        <i className="fa fa-times"
                        title="Cancel"
                        onClick={this.handleCancel}
                        />
                    </div>
                </li>
            );
        }
        else{
            return (
                <li ref={this.myRef}>{ item }
                    <div className="row">
                        <i className="fa fa-pencil"
                        title="Edit"
                        onClick={this.onEdit}
                        />
                        <i className="fa fa-trash"
                        title="Delete"
                        onClick={this.onRemove}
                        />
                    </div>
                </li>
            );
        }
        
    };
}

export default todo
