import { Transform } from 'scramjet';

export default async function handler(req, res) {
  const data = ['hello', 'world'];
  const output = await Transform.from(data)
    .map(x => x.toUpperCase())
    .toArray();
  res.status(200).json({ result: output });
}
