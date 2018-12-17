import { MoonLoader } from 'react-spinners';
import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as cn from 'classnames';
import { DApp } from '../../redux/model';
// import { MoonLoader } from "react-spinners";
import { IState } from '../../redux/reducers/state';
import * as TrayActions from '../../redux/actions/tray';
import { actions as NotificationActions } from '../../modules/Notification';
import { component as AppsManager } from '../../modules/AppsManager';

import './AppCard.sass';

interface AppCardProps {
  dapp?: any;
  switchDapp: (dappName: string) => void;
  installDapp?: (dappName: string, hash: string) => void;
  hideAction?: boolean;
}

interface AppCardState {
  status: string;
}

export class AppCard extends React.Component<AppCardProps, AppCardState> {
  constructor(props: AppCardProps) {
    super(props);
    this.getCategories = this.getCategories.bind(this);
    this.actionHandle = this.actionHandle.bind(this);

    this.state = {
      status: '',
    };
  }

  private getCategories(): JSX.Element {
    const { dapp } = this.props;
    console.log('getCategories', dapp);
    const items = dapp.categories && dapp.categories.map((item: any, index: number): JSX.Element => (
      <div key={`tag-${index}`} className="tag">
        <span>{item}</span>
      </div>
    ));
    return (
      <div className="tags">
        {items}
      </div>
    );
  }

  private async actionHandle(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    // @TODO: add functionaly cb wrapper here\
    this.setState({
      status: 'install',
    });
  }

  getBadge() {
    const { dapp } = this.props;

    return dapp.installed ? 'Open' : 'Install';
  }

  private getAction(): JSX.Element {
    const { dapp } = this.props;

    return (
      <div className={cn('action', { action_installed: dapp.installed })}>
        {this.getBadge()}
      </div>
    );
  }

  onClickAppCard() {
    const { dapp, switchDapp } = this.props;

    console.log('appCARD', this.props, AppsManager);
    return switchDapp(dapp.appName);
  }

  public render() {
    const { dapp, hideAction } = this.props;
    return (
      <div className="app-card" onClick={this.onClickAppCard.bind(this)}>
        <div className="header" style={{ backgroundImage: `url('${dapp.preview || ''}')` }}>
        </div>
        <div className="content">
          <div className="title">{dapp.appName}</div>
          <div className="footer">
            {this.getCategories()}
            {hideAction ? null : this.getAction()}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IState>) => bindActionCreators({
  switchDapp: TrayActions.switchDapp,
}, dispatch);

export default connect<AppCardProps, {}>(null, mapDispatchToProps)(AppCard);
