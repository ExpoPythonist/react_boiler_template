import React from 'react';
import BaseComponent from '..';

class Item extends BaseComponent {
    render() {
        return (
            <div className="alert alert-primary d-flex justify-content-between mr-2" style={this.props.style}>
                <span>{this.props.label || 'Add Props [ label ]'}</span>
                <div className=" pull-right ml-2">
                    {this.props.onEdit && <i className="mdi mdi-pen cursor-pointer ml-2"
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.onEdit()
                        }}
                    ></i>}

                    {this.props.onDelete && <i className="mdi mdi-close cursor-pointer ml-2"
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.onDelete()
                        }}
                    ></i>}

                    {this.props.onView && <i className="mdi mdi-eye cursor-pointer ml-2"
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.onView()
                        }}
                    ></i>}
                </div>
            </div>
        )
    }
}

export const Badge = Item;