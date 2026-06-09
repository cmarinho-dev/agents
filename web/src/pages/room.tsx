import { Navigate, useParams } from 'react-router-dom';

interface RoomParams extends Record<string, string | undefined> {
  roomId?: string;
}

export function Room() {
  const params = useParams<RoomParams>();
  if (!params.roomId) {
    return <Navigate replace to="/" />;
  }
  return <div>Room details {JSON.stringify(params)}</div>;
}
