import React, { useMemo } from "react";
import { Paper, Typography, Grid, LinearProgress, Box } from "@mui/material";
import { type Task } from "./tasks";

interface TaskCounterProps {
  pendingTasks?: Task[];
  completedTasks?: Task[];
}

interface StatCardProps {
  value: number;
  label: string;
  color: string;
}

const StatCard = ({ value, label, color }: StatCardProps) => (
  <Paper
    elevation={2}
    sx={{
      p: 2,
      textAlign: "center",
      borderRadius: 2,
      bgcolor: `${color}.50`,
    }}
  >
    <Typography variant="h5" fontWeight="bold" color={`${color}.600`}>
      {value}
    </Typography>
    <Typography variant="body2" fontWeight="medium" color={`${color}.800`}>
      {label}
    </Typography>
  </Paper>
);

const TaskCounter = ({ pendingTasks, completedTasks }: TaskCounterProps) => {
  const { total, completed, pending, progress } = useMemo(() => {
    const completedCount = completedTasks?.length ?? 0;
    const pendingCount = pendingTasks?.length ?? 0;
    const totalCount = completedCount + pendingCount;
    const progressPercent =
      totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

    return {
      total: totalCount,
      completed: completedCount,
      pending: pendingCount,
      progress: progressPercent,
    };
  }, [pendingTasks, completedTasks]);

  return (
    <Paper
      elevation={3}
      sx={{ p: 4, mb: 4, borderRadius: 3, bgcolor: "white" }}
    >
      <Typography variant="h6" fontWeight="bold" mb={2} color="text.primary">
        📊 Contador de Tarefas
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <StatCard value={total} label="Total de Tarefas" color="blue" />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard value={pending} label="Pendentes" color="orange" />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard value={completed} label="Concluídas" color="green" />
        </Grid>
      </Grid>

      <Box mt={3}>
        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography variant="body2" color="text.secondary">
            Progresso
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {progress}%
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ height: 8, borderRadius: 5 }}
          color="success"
        />
      </Box>
    </Paper>
  );
};

export default TaskCounter;
