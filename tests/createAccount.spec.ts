import {test,expect} from '@playwright/test';

test('Create a new user account via API', async({request})=>{

    const uniqueEmail=`kapil.test.${Date.now()}@example.com`;
    const password='Test@12345';

   const response= await request.post('/api/createAccount',{
        form:{
            name: 'Kapil QA',
      email: uniqueEmail,
      password: password,
      title: 'Mr',
      birth_date: '15',
      birth_month: '6',
      birth_year: '1995',
      firstname: 'Kapil',
      lastname: 'QA',
      company: 'TestCo',
      address1: '123 Test Street',
      address2: '',
      country: 'India',
      zipcode: '411001',
      state: 'Maharashtra',
      city: 'Pune',
      mobile_number: '9999999999',
        },


    });

    expect(response.status()).toBe(200);

   const body= await response.json();

   expect(body.responseCode).toBe(201);
   expect(body.message).toBe('User created!');

   console.log('Created Account : ',uniqueEmail,password);

});