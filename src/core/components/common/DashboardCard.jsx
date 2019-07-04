import React from 'react';
import BaseComponent from '..';
export class DashboardCard extends BaseComponent {
  view = (id) => {
    this.props.view(id);
  }
  render() {
    const Icon = () => {
      let icon = <></>;
      switch (this.props.icon) {
        case 'income':
          icon = <div className=" mini-stat-icon">
            <i className="mdi mdi-cube-outline float-right"></i>
          </div>
          break;
        case 'deposit':
          icon = <div className="mini-stat-icon">
            <i className="mdi mdi-buffer float-right"></i>
          </div>

          break;
        case 'tag':
          icon = <div className="mini-stat-icon">
            <i className="mdi mdi-tag-text-outline float-right"></i>
          </div>

          break;
        default:
          icon = <></>
          break;
      }
      return icon;
    }
    return (
      <div onClick={() => this.view(this.props.id)} className={`${this.props.className || 'col-xl-3 col-md-6'}`}>
        <div className="card mini-stat bg-primary flot-chart-height">
          <div className="card-body mini-stat-img">
            <Icon />
            <div className="text-white">
              <h6 className="text-white mb-3">{this.props.title}</h6>
              <p className="mb-3">
                <br />
                ${this.props.amount}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
