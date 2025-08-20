import express from 'express';
import OpenAI from 'openai';
import cors from 'cors';


const client = new OpenAI();

const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());

app.post('/translate', async (req, res) => {
  const { input_text } = req.body;
  try {
    console.log("sending request to openai");
    const res_c = await client.responses.create({
      model: "gpt-5-nano",
      instructions: "Translate Japanese to English. Preserve markup. If nothing to translate return the same input. no reasoning. it's too slow and takes too much tokens",
      input: input_text
    });
    console.log(res_c);
    const {output_text} = res_c;
    res.json({
      "input_text": input_text, 
      "output_text": output_text
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({error: "error"});
  }
});


app.listen(port, () => {
  console.log(`listening to ${port}`);
});
