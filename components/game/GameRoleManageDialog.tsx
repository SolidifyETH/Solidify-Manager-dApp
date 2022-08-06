import { capitalize } from 'lodash';
import { JSONSchema7 } from 'json-schema';
import { GAME_ROLE } from 'constants/contracts';
import useDao from 'hooks/useDao';
import ManageDialog from 'components/ManageDialog';

/**
 * Fix to support enum names in the schema.
 *
 * Details - https://github.com/rjsf-team/react-jsonschema-form/issues/2663#issuecomment-1106698186
 */
declare module 'json-schema' {
  export interface JSONSchema7 {
    enumNames?: Array<string>;
  }
}

/**
 * A dialog for assign or remove DAO role for a specified soul.
 */
export default function GameRoleManageDialog({ dao, isClose, onClose }: any) {
  const { assignRoleToSoul, removeRoleToSoul } = useDao();

  const schema: JSONSchema7 = {
    type: 'object',
    required: ['soulId', 'action', 'roleName'],
    properties: {
      soulId: {
        type: 'string',
        title: 'Soul ID',
      },
      action: {
        type: 'string',
        title: 'Action',
        default: 'assignRole',
        enum: ['assignRole', 'removeRole'],
        enumNames: ['Assign Role', 'Remove Role'],
      },
      roleName: {
        type: 'string',
        title: 'Role',
        default: 'member',
        enum: ['member', 'admin'],
        enumNames: [
          capitalize(GAME_ROLE.member.name),
          capitalize(GAME_ROLE.admin.name),
        ],
      },
    },
  };

  const getFormAction = (data: any) =>
    data.action === 'assignRole' ? assignRoleToSoul : removeRoleToSoul;

  const dialogProps = {
    title: 'Manage Roles',
    actionLabel: 'Submit',
    formState: {},
    isClose,
    onClose,
    schema,
    submit: (data: any) =>
      getFormAction(data)(dao.id, data.soulId, data.roleName),
  };

  return <ManageDialog {...dialogProps} />;
}
