const  patients = [
    {
        id: 'ADELANG',
        firstName:'Axel',
        lastName:'Del Angel',
        policies:[{paymetPlan:'MEDCO-PA',policyNumber:'123456789',groupNumber:'VALIDATE'},{paymetPlan:'CIGNA',policyNumber:'9876543221',groupNumber:'INVALIDATE'},{paymetPlan:'BCBS',policyNumber:'1122334455',groupNumber:'VALIDATE'}]
    },
    {
        id: 'LDIAZ',
        firstName:'Luis',
        lastName:'Diaz',
        policies:[{paymetPlan:'MEDCO-PA',policyNumber:'123456789',groupNumber:'VALIDATE'},{paymetPlan:'BCBS',policyNumber:'1122334455',groupNumber:'VALIDATE'}]
    },
    {
        id: 'ATORRES',
        firstName:'Aaron',
        lastName:'Torres',
        policies:[{paymetPlan:'MEDCO-PA',policyNumber:'123456789',groupNumber:'VALIDATE'},{paymetPlan:'CIGNA',policyNumber:'9876543221',groupNumber:'INVALIDATE'},{paymetPlan:'BCBS',policyNumber:'1122334455',groupNumber:'VALIDATE'}]
    },
    {
        id: 'HCORONA',
        firstName:'Hector',
        lastName:'Coronado',
        policies:[]
    },
    {
        id: 'PKUMAR',
        firstName:'Pawan',
        lastName:'Kumar',
        policies:[{paymetPlan:'MEDCO-PA',policyNumber:'123456789',groupNumber:'VALIDATE'},{paymetPlan:'CIGNA',policyNumber:'9876543221',groupNumber:'INVALIDATE'}]
    }
];

export default patients;