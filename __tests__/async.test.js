fetchData = async (data) => {
  return await 'peanut butter'
}

it('the data is peanut butter callback', () => {
  function callback(data) {
    expect(data).toBe('peanut butter');
    done();
  }
  fetchData(callback);
});

it('the data is peanut butter promises', () => {
  expect.assertions(1);
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

// it('the fetch fails with an error', () => {
//   expect.assertions(1);
//   return fetchData().catch(e => expect(e).toMatch('error'));
// });

it('the data is peanut butter', () => {
  expect.assertions(1);
  return expect(fetchData()).resolves.toBe('peanut butter');
});

// it('the fetch fails with an error', () => {
//   expect.assertions(1);
//   return expect(fetchData()).rejects.toMatch('error');
// });

it('the data is peanut butter', async () => {
  expect.assertions(1);
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

// it('the fetch fails with an error', async () => {
//   expect.assertions(1);
//   try {
//     await fetchData();
//   } catch (e) {
//     expect(e).toMatch('error');
//   }
// });

it('the data is peanut butter', async () => {
  expect.assertions(1);
  await expect(fetchData()).resolves.toBe('peanut butter');
})

it('the data is peanut butter', async () => {
  expect.assertions(1);
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

// it('the fetch fails with an error', async () => {
//   expect.assertions(1);
//   try {
//     await fetchData();
//   } catch (e) {
//     expect(e).toMatch('error');
//   }
// });

it('the data is peanut butter', async () => {
  expect.assertions(1);
  await expect(fetchData()).resolves.toBe('peanut butter');
});

// it('the fetch fails with an error', async () => {
//   expect.assertions(1);
//   await expect(fetchData()).rejects.toMatch('error');
// });