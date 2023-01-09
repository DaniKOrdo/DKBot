module.exports = {
    secure
}

async function secure(schema, id, id2, obj) {
    let data = await schema.findOne({id: id2});
    if(!data) {
        console.log(`No data found for ${id2} in ${id}. Creating...`);
        data = await new schema(obj);
        await data.save();
    }
    return data;
}