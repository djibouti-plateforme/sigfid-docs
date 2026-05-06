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
        'agent/tableau-de-bord',
        {
          type: 'category',
          label: 'Contribuables',
          items: [
            'agent/contribuables/recherche',
            'agent/contribuables/fiche-contribuable',
            'agent/contribuables/compte-impots',
          ],
        },
        {
          type: 'category',
          label: 'Déclarations fiscales',
          items: [
            'agent/declarations/intro',
            'agent/declarations/its',
            'agent/declarations/tva',
            'agent/declarations/ibp-imf',
            'agent/declarations/patentes',
            'agent/declarations/licences',
            'agent/declarations/irnr',
            'agent/declarations/ras-ps',
            'agent/declarations/autres-impots',
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
        'agent/penalites',
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
