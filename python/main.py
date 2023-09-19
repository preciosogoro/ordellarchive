import spacy

nlp = spacy.load("en_core_web_lg")

w1 = "red"
w2 = "walking"

w1 = nlp.vocab[w1]
w2 = nlp.vocab[w2]

similarity = w1.similarity(w2)

print(similarity)

if similarity > 0.5:
    print("yeah its pretty similiar")

else:
    print("not similiar at all lol")