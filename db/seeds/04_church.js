exports.seed = function (knex) {
  return knex('church').del()
    .then(() => {
      return knex('church').insert([{
        id: 1,
        churchname: 'Barrie Ward',
        churchaddress1: '79 Ferris Ln',
        churchaddress2: '',
        churchcity: 'Barrie',
        churchprov: 'ON',
        churchzip: 'L4M 2Y3',
        churchphone: '705-737-1097',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        churchname: 'Orillia Branch',
        churchaddress1: '10 Skyline Dr',
        churchaddress2: '',
        churchcity: 'Orillia',
        churchprov: 'ON',
        churchzip: 'L3V 3V7',
        churchphone: '705-325-4020',
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('church_id_seq', (SELECT MAX(id) FROM church));"
      );
    });
};