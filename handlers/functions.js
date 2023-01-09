module.exports = { secure }

async function secure(schema, id1, id2, obj) {
    let data = await schema.findOne({id1: id2});
    if(!data) {
        console.log(`No data found for ${id2} in ${id1}. Creating...`);
        data = await new schema(obj);
        await data.save();
    }
    return data;
}