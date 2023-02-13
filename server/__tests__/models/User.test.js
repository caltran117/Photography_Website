const { userSchema } = require('../../models/User.js');

describe('User Schema', () => {
  describe('Properties should be defined and validated', () => {
    it('should have username', () => {
      expect(userSchema.paths).toHaveProperty('username');
      const col = userSchema.paths.username;
      expect(col.instance).toEqual('String');
      expect(col.options.required).toEqual(true);
      expect(col.options.unique).toEqual(true);
      expect(col.options.trim).toEqual(true);
    });
  });
});