import React, { useEffect, useState } from "react";
import { View, Pressable } from "react-native";
import { NeonText } from "@components/NeonText";
import { ApiService } from "@services/api";
import { QuizQuestion } from "@types/index";
import { NeonButton } from "@components/NeonButton";

const QuizScreen: React.FC = () => {
  const [question, setQuestion] = useState<QuizQuestion | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => {
    ApiService.getQuizToday().then(setQuestion).catch(() => {});
  }, []);

  const submit = async () => {
    if (selected == null || !question) return;
    setSubmitting(true);
    try {
      const res = await ApiService.answerQuiz({ questionId: question.id, choice: selected });
      setFeedback(res.correct ? "Bonne réponse !" : "Raté !");
    } catch {
      setFeedback("Erreur de soumission");
    }
    setSubmitting(false);
  };

  if (!question) {
    return <View style={{ flex:1, backgroundColor:"#000", justifyContent:"center", alignItems:"center" }}>
      <NeonText color="blue">Chargement...</NeonText>
    </View>;
  }

  return (
    <View style={{ flex:1, backgroundColor:"#000", padding:16 }}>
      <NeonText color="red" style={{ fontSize:20 }}>Quiz du jour ({question.difficulty})</NeonText>
      <NeonText glow={false} style={{ marginTop:12 }}>{question.question}</NeonText>
      <View style={{ marginTop:16 }}>
        {question.answers.map((a, i) => (
          <Pressable
            key={i}
            onPress={() => setSelected(i)}
            style={{
              backgroundColor: selected === i ? "#FF0028" : "#1C1C1C",
              padding:12,
              borderRadius:10,
              marginBottom:10
            }}
          >
            <NeonText glow={false}>{a}</NeonText>
          </Pressable>
        ))}
      </View>
      <NeonButton title="Valider" onPress={submit} loading={submitting} />
      {feedback && (
        <NeonText color={feedback.includes("Bonne") ? "blue" : "red"} style={{ marginTop:16 }}>
          {feedback}
        </NeonText>
      )}
    </View>
  );
};

export default QuizScreen;