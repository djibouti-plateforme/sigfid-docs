import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  adminSidebar: [
    {
      type: 'category',
      label: 'Admin fonctionnel',
      collapsible: false,
      items: [
        'admin/intro',
        'admin/connexion',
        {
          type: 'category',
          label: 'Gestion des utilisateurs',
          items: [
            'admin/utilisateurs/agents',
            'admin/utilisateurs/administrateurs',
            'admin/utilisateurs/permissions',
          ],
        },
        {
          type: 'category',
          label: 'Données de référence',
          items: [
            'admin/reference/centres-fiscaux',
            'admin/reference/parametres-fiscaux',
          ],
        },
      ],
    },
  ],

  agentSidebar: [
    {
      type: 'category',
      label: 'Agent des impôts',
      collapsible: false,
      items: [
        'agent/intro',
        'agent/connexion',
        {
          type: 'category',
          label: 'Contribuables',
          items: [
            'agent/contribuables/recherche',
            'agent/contribuables/compte-impots',
          ],
        },
        {
          type: 'category',
          label: 'Déclarations fiscales',
          items: [
            'agent/declarations/its',
            'agent/declarations/tva',
            'agent/declarations/ibp-imf',
            'agent/declarations/patentes',
            'agent/declarations/autres',
          ],
        },
        {
          type: 'category',
          label: 'Enregistrement',
          items: [
            'agent/enregistrement/nouvelle-demande',
            'agent/enregistrement/validation',
          ],
        },
        'agent/messagerie',
      ],
    },
  ],

  contribuableSidebar: [
    {
      type: 'category',
      label: 'Espace contribuable',
      collapsible: false,
      items: [
        'contribuable/intro',
        'contribuable/connexion',
        'contribuable/compte',
        'contribuable/declarations',
        'contribuable/messagerie',
      ],
    },
  ],
};

export default sidebars;
