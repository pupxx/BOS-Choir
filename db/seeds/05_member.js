exports.seed = function (knex) {
  return knex('member').del()
    .then(() => {
      return knex('member').insert([{
        id: 1,
        firstname: 'Cheryln',
        lastname: 'Barber',
        address1: '215 10th Ave. E.',
        address2: '',
        city: 'Brampton',
        prov: 'ON',
        postal: 'L0L 1N0',
        phone: '916-716-4754',
        email: 'cherylnbarber@gmail.com',
        part: 'Soprano',
        admin: false,
        position: 'member',
        church_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        firstname: 'Jean',
        lastname: 'Barber',
        address1: '5870 5th SideRoad',
        address2: 'RR#1',
        city: 'Egbert',
        prov: 'ON',
        postal: 'L0L 1N0',
        phone: '705-435-7974',
        email: 'ejeanbarber@gmail.com',
        part: 'Soprano',
        admin: true,
        position: 'Director',
        church_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        firstname: 'Shirley',
        lastname: 'Addy',
        address1: '567 Somewhere',
        address2: '',
        city: 'Barrie',
        prov: 'ON',
        postal: 'L0L 2h6',
        phone: '705-555-5555',
        email: 'saddy@gmail.com',
        part: 'Alto',
        admin: false,
        position: 'member',
        church_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('member_id_seq', (SELECT MAX(id) FROM member));"
      );
    });
};