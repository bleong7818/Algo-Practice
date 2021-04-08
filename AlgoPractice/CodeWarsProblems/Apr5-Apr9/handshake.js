function getParticipants(handshakes) {
    var participants = 1;
    while (participants * (participants - 1) / 2 < handshakes) participants++;
    return participants;
}