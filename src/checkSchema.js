import Ajv from "ajv";
const ajv = new Ajv()

const ValidSchema = (schema, data) => {
    const validate = ajv.compile(schema);
    const valid = validate(data);
    return valid;
}

export default ValidSchema;