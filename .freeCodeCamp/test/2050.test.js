const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should enter the correct command in the psql prompt', async () => {
    const lastLog = await getLastLog(true);
    const query = /statement:select(major_id,min\(gpa\),max\(gpa\)|major_id,min\(gpa\),max\(gpa\)|min\(gpa\),major_id,max\(gpa\)|min\(gpa\),max\(gpa\),major_id|max\(gpa\),major_id,min\(gpa\)|max\(gpa\),min\(gpa\),major_id)fromstudentsgroupbymajor_idhavingmax\(gpa\)=4(\.0)?;/i;

    assert(query.test(lastLog) && !/ERROR/.test(lastLog));
  });
});
