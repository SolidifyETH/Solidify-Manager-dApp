export const GAME_NAME: any = {
  dao: 'DAOs',
  mdao: 'Service Pods',
  project: 'Projects',
  tasks: 'Quests',
};

export const GAME_DESC: any = {
  mdao: `Mentor DAOs consist of a mentor and mentees that work on bounties
  together, as a team.`,
  project: '',
  tasks: 'Quests are small tasks that can earn you a prize.',
};

export const SOUL_TYPE: any = {
  created_by_not_contract: '',
  game: 'GAME',
  process: 'PROCESS',
};

export const GAME_TYPE: any = {
  mdao: 'MDAO',
  project: 'PROJECT',
};

export const ENTITY: any = {
  soul: 'Person',
  game: 'Game',
  task: 'Bounty',
  mdao: 'Team',
  project: 'Project',
};

/* TODO: Role Token IDs aren't static/predetermind. Should fetch them from the contract directly */
export const GAME_ROLE = {
  admin: {
    id: '1',
    name: 'lead',
  },
  member: {
    id: '2',
    name: 'member',
  },
  authority: {
    id: '3',
    name: 'authority',
  },
  applicant: {
    id: '4',
    name: 'applicant',
  },
};

export const CLAIM_STAGE: any = {
  pending: 0,
  open: 1,
  decision: 2,
  action: 3,
  appeal: 4,
  execution: 5,
  closed: 6,
  cancelled: 7,
};

export const CLAIM_ROLE: any = {
  admin: {
    id: '1',
    name: 'admin',
  },
  subject: {
    id: '3',
    name: 'subject',
  },
  applicant: {
    id: '5',
    name: 'applicant',
  },
};

export const CLAIM_POST_TYPE: any = {
  message: 'message',
  application: 'application',
};

export const CLAIM_POST_ENTITY_TYPE: any = {
  applicant: 'applicant',
};

//--- DEPRECATE

export const REPUTATION_DOMAIN = {
  environment: {
    name: 'environment',
  },
  personal: {
    name: 'personal',
  },
  community: {
    name: 'community',
  },
  professional: {
    name: 'professional',
  },
};
