module.exports = (Sequelize, DataTypes) => {
    const Meetings = Sequelize.define(
        "meetings",
        {
            meeting_id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            created_at: {
                type: 'TIMESTAMP',
                allowNull: false
            },
            created_by: {
                type: DataTypes.STRING,
                allowNull: false
            },
            scheduled_at: {
                type: 'TIMESTAMP',
                allowNull: false
            },
            scheduled_by: {
                type: DataTypes.STRING,
                allowNull: false
            },
            scheduled_with: {
                type: DataTypes.STRING,
                allowNull: false
            }, link: {
                type: DataTypes.STRING,
                allowNull: false
            }

        },
        {
            timestamps: false,
            modelName: "one-one-meeting-scheduler",
            tableName: "meetings",
        },
    );

    return Meetings;
};
