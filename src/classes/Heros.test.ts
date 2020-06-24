import Heros from './Heros'

it('constructor Heros', () => {
    expect(new Heros().getMaxHp).toBeLessThan(201);
    expect(new Heros().getMaxHp).toBeGreaterThanOrEqual(1)
    expect(new Heros().getDef).toBeLessThan(101);
    expect(new Heros().getDef).toBeGreaterThan(1);
})