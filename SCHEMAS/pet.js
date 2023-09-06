const z = require('zod')

const petSchema = z.object({
    id: z.number({
        invalid_type_error: 'Pet Id must be a Number',
        required_error: 'Pet Id is required'
    }).int(),
    name: z.string({
        invalid_type_error: 'Pet Name must be a String',
        required_error: 'Pet Name is required'
    }),
    age: z.number({
        invalid_type_error: 'Pet Age must be a Number',
        required_error: 'Pet Age is required'
    }).int(),
    type: z.string({
        invalid_type_error: 'Pet Type must be a String',
        required_error: 'Pet Type is required'
    }),
    vetId: z.number({
        invalid_type_error: 'Pet VetId must be a Number',
        required_error: 'Pet VetId is required'
    }).int(),
    userId: z.number({
        invalid_type_error: 'Pet UserId Name must be a Number',
        required_error: 'Pet UserId is required'
    }).int()
})

function validatePet(obj) {
    return petSchema.safeParse(obj); // safeParse vs parse
}

module.exports = {
    validatePet
}