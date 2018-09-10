import * as React from "react";
import { PermCheckBox } from './PermCheckBox'; 
import { Permission } from "../model";

interface PermissionLayoutProps {
  permissions: Permission[]
}
 
export class PermissionLayout extends React.Component<PermissionLayoutProps> { 
  constructor(props: PermissionLayoutProps) {
    super(props);
  }

  public render() {
    const permissionItems: JSX.Element[] = this.props.permissions.map((perm): JSX.Element => (
      <PermCheckBox key={`${perm}`} permissionFlag={perm}/> 
    ));

    return (
      <div>
        {permissionItems}
        <button>APPROVE</button>
      </div>
    )
  }
}

