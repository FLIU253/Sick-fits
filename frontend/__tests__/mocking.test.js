function Person(name, foods) {
  this.name = name;
  this.foods = foods;
}

Person.prototype.fetchFavFoods = function () {
  return new Promise((resolve, reject) => {
    //simulating an API
    setTimeout(() => resolve(this.foods), 2000);
  });
};

describe('mocking learning', () => {
  it('mocks a reg function', () => {
    const fetchDogs = jest.fn();
    fetchDogs('snickers');
    expect(fetchDogs).toHaveBeenCalled();
    expect(fetchDogs).toHaveBeenCalledWith('snickers');
  });

  it('can create a person', () => {
    const me = new Person('Frank', ['pizza', 'wings']);
    expect(me.name).toBe('Frank');
  });

  it('can fetch foods', async () => {
    const me = new Person('Frank', ['pizza', 'wings']);
    //mock the favfoods function
    me.fetchFavFoods = jest.fn().mockResolvedValue(['pizza', 'wings']);
    const favFoods = await me.fetchFavFoods();
    expect(favFoods).toContain('pizza');
  });
});
