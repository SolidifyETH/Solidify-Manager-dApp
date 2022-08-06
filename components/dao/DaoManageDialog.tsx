import ManageDialog from 'components/ManageDialog';
import { JSONSchema7 } from 'json-schema';
import useDao from 'hooks/useDao';

/**
 * A dialog for creating or editing DAO.
 */
export default function DaoManageDialog({ dao, isClose, onClose }: any) {
  const { createDao, editDao } = useDao();
  const { uriData, name } = dao;

  const schema: JSONSchema7 = {
    type: 'object',
    required: ['name'],
    properties: {
      image: {
        type: 'string',
        title: '',
      },
      name: {
        type: 'string',
        title: 'Name',
      },
      description: {
        type: 'string',
        title: 'Description',
      },
    },
  };

  const uiSchema = {
    image: {
      'ui:widget': 'ImageInput',
    },
    name: {
      'ui:disabled': dao ? true : false,
    },
    description: {
      'ui:widget': 'textarea',
      'ui:options': {
        rows: 3,
      },
    },
  };

  const formState = {
    ...(dao && {
      image: uriData?.image,
      name,
      description: uriData?.description,
    }),
  };

  const sharedProps = {
    formState,
    isClose,
    onClose,
    schema,
    uiSchema,
  };
  const editProps = {
    title: 'Edit DAO',
    actionLabel: 'Save',
    submit: (...args: any) => editDao(dao.id, args.metadataUrl),
    ...sharedProps,
  };
  const createProps = {
    title: 'Create DAO',
    actionLabel: 'Create',
    submit: (...args: any) => createDao(args.formData.name, args.metadataUrl),
    ...sharedProps,
  };

  const dialogProps = dao ? editProps : createProps;

  return <ManageDialog {...dialogProps} />;
}
