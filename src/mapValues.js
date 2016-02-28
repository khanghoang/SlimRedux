export default function mapValues(obj, fn) {

  // loop the keys
  return Object.keys(obj)
  .reduce((results, key) => {
    results[key] = fn(obj[key], key);
    return results;
  }, {});

}
