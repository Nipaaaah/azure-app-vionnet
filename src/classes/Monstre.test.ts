import Monstre from './Monstre';

it('test name', () => {
    expect(new Monstre().getNom.length).toBeGreaterThan(5);
});

it('constructor Monstre', () =>{
    expect(new Monstre().getMaxHp).toBeLessThan(201);
    expect(new Monstre().getMaxHp).toBeGreaterThanOrEqual(1)
    expect(new Monstre().getDef).toBeLessThan(101);
    expect(new Monstre().getDef).toBeGreaterThan(1);
})