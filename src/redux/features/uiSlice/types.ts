export interface UiState {
  modal: {
    text: string;
    showModal: boolean;
    isError: boolean;
  };
  isLoading: boolean;
}

export interface ShowModalActionPayload {
  isError: boolean;
  text: string;
}
