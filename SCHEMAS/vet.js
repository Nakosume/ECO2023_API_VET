const z = require('zod')

const vetSchema = z.object({
    id: z.number({
        invalid_type_error: 'Vet Id must be a Number',
        required_error: 'Vet Id is required'
    }).int(),
    name: z.string({
        invalid_type_error: 'Vet Name must be a String',
        required_error: 'Vet Name is required'
    }),
    last: z.string({
        invalid_type_error: 'Vet Last Name must be a String',
        required_error: 'Vet Last Name is required'
    })
})

function validateVet(obj) {
    return vetSchema.safeParse(obj); // safeParse vs parse
}

module.exports = {
    validateVet
}